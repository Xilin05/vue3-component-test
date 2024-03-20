<template>
  <div class="page-audio-container">
    <div class="audio-container">
      <audio
        ref="musicAudioRef"
        :src="MusicFile"
        controls
        name="童话"
        author="光良"
        @timeupdate="updateTime"
      ></audio>
    </div>

    <div class="lyric-container">
      <ul ref="lyricListRef" class="lyric-list">
        <template v-for="(lyric, index) in lyricList" :key="index">
          <li
            class="lyricItem"
            :class="[index == currentIndex ? 'active' : '']"
          >
            {{ lyric.words }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import MusicFile from '@/assets/童话-光良.mp3';
import useAction from './useAction.ts';

const { currentIndex, lyricList, musicAudioRef, lyricListRef, updateTime } =
  useAction();
</script>

<style scoped lang="scss">
.page-audio-container {
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #666;
  text-align: center;

  .audio-container {
    width: 100%;

    audio {
      width: 450px;
      margin: 30px 0;
    }
  }

  .lyric-container {
    height: 450px;
    overflow: hidden;
    ul {
      transition: 0.6s;
      li {
        list-style: none;
        height: 32px;
        line-height: 32px;
        transition: 0.6s;
      }

      .active {
        color: white;
        transform: scale(1.2);
        transition: 0.6s;
      }
    }
  }
}
</style>
