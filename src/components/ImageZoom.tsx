import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { useGestures } from '../hooks/useGestures';
import { useImageLayout } from '../hooks/useImageLayout';

import type { ImageZoomProps } from '../types';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
});

const ImageZoom: React.FC<ImageZoomProps> = ({
  minScale,
  maxScale,
  minPanPointers,
  maxPanPointers,
  isPanEnabled,
  isPinchEnabled,
  onInteractionStart,
  onInteractionEnd,
  onPinchStart,
  onPinchEnd,
  onPanStart,
  onPanEnd,
  onResetAnimationEnd,
  children,
  onLayout,
  style = {},
}) => {
  const { center, onImageLayout } = useImageLayout({ onLayout });
  const { animatedStyle, gestures } = useGestures({
    center,
    minScale,
    maxScale,
    minPanPointers,
    maxPanPointers,
    isPanEnabled,
    isPinchEnabled,
    onInteractionStart,
    onInteractionEnd,
    onPinchStart,
    onPinchEnd,
    onPanStart,
    onPanEnd,
    onResetAnimationEnd,
  });

  return (
    <GestureDetector gesture={gestures}>
      <Animated.View
        onLayout={onImageLayout}
        style={[styles.imageContainer, style, animatedStyle]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default ImageZoom;
