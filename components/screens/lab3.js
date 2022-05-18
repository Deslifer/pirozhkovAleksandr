import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {GradientButton, GradientNeomorph} from '../addons/GradientComponents';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {loadPhoto} from '../../store/photo';
import {styles} from '../styles/lab3Styles';

const Lab3 = () => {
  const dispatch = useDispatch();

  const [url, setUrl] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [page, setPage] = useState(0);
  const [albumUrl, setAlbumUrl] = useState(
    'https://picsum.photos/v2/list?page=2',
  );
  const [switched, setSwitch] = useState(0);
  const [album, setAlbum] = useState([]);
  const [miniAlbum, setMiniAlbum] = useState([]);
  const ref = React.useRef(null);
  const ref2 = React.useRef(null);

  const albumCall = useCallback(
    ref1 => {
      return (
        <GradientNeomorph styleBox={styles.box} styleShadow={styles.boxShadow}>
          <ScrollView ref={ref1} horizontal={true}>
            <View style={styles.scroll} />
            {allImages.map(item => {
              return (
                <FastImage
                  key={item.id}
                  style={styles.image}
                  source={{
                    uri: item.download_url,
                    headers: {Authorization: 'token'},
                    cache: FastImage.cacheControl.immutable,
                  }}
                />
              );
            })}
            <View style={styles.scroll} />
          </ScrollView>
        </GradientNeomorph>
      );
    },
    [allImages],
  );

  const miniAlbumCall = useCallback(
    ref1 => {
      return (
        <GradientNeomorph
          styleBox={styles.box2}
          styleShadow={styles.boxShadow2}>
          <ScrollView ref={ref1} horizontal={true}>
            {allImages.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    ref.current.scrollTo({
                      x: index * 320,
                      y: 0,
                      animated: true,
                    });
                    dispatch(loadPhoto(item.download_url));
                  }}>
                  <FastImage
                    key={item.id}
                    style={styles.image2}
                    source={{
                      uri: item.download_url,
                      headers: {Authorization: 'token'},
                      cache: FastImage.cacheControl.immutable,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </GradientNeomorph>
      );
    },
    [allImages, dispatch],
  );

  useEffect(() => {
    setAlbum(albumCall(ref));
  }, [albumCall]);

  useEffect(() => {
    setMiniAlbum(miniAlbumCall(ref2));
  }, [miniAlbumCall]);

  useEffect(() => {
    axios
      .get(albumUrl)
      .then(({data: newData}) => {
        setAllImages(newData);
      })
      .catch(() => {});
  }, [albumUrl]);

  const pageControl = () => {
    return (
      <View style={styles.cont}>
        {!!page && (
          <TouchableOpacity
            onPress={() => {
              setUrl(url - 6);
              setPage(page - 1);
              ref2.current.scrollTo({
                x: (page - 1) * 360,
                y: 0,
                animated: true,
              });
            }}>
            <GradientButton text="PREV" />
          </TouchableOpacity>
        )}
        {!!(allImages.length / 6 - page - 1) && (
          <TouchableOpacity
            onPress={() => {
              setUrl(url + 6);
              setPage(page + 1);
              ref2.current.scrollTo({
                x: (page + 1) * 360,
                y: 0,
                animated: true,
              });
            }}>
            <GradientButton text="NEXT" />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const memoUse = () => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <View style={styles.cont}>
          <TouchableOpacity
            onPress={() => {
              switched
                ? setAlbumUrl('https://picsum.photos/v2/list?page=2')
                : setAlbumUrl('https://picsum.photos/v2/list?page=1');
              setSwitch(!switched);
            }}>
            <GradientButton text="SWITCH" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View>
        {memoUse()}
        {album}
        {miniAlbum}
        {pageControl()}
      </View>
    </View>
  );
};

export default Lab3;
