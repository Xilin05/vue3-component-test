import { onMounted, ref, Ref } from 'vue';
import { musicLyric } from '@/assets/tonghua-lyric.ts';

export default function useAction() {
  interface ParseItemRaw {
    time: number;
    words: string;
  }

  const currentIndex = ref();
  const lyricList: Ref<ParseItemRaw[]> = ref([]);

  const parseTime = (timeStr: string): number => {
    const splitTime = timeStr.split(':');
    return +splitTime[0] * 60 + +splitTime[1];
  };

  const parseLyric = (): ParseItemRaw[] => {
    const lines: string[] = musicLyric.split('\n') || [];
    const parseRes: ParseItemRaw[] = [];
    if (lines.length) {
      lines.forEach((line: string) => {
        const splitRes: string[] = line.split(']');
        parseRes.push({
          time: parseTime(splitRes[0].substring(1)),
          words: splitRes[1]
        });
      });
    }

    return parseRes;
  };

  lyricList.value = parseLyric();

  const musicAudioRef = ref();

  const findHightlightIndex = (): number => {
    const currTime: number = musicAudioRef.value.currentTime;

    for (let i = 0; i < lyricList.value.length; i++) {
      if (currTime < lyricList.value[i].time) return i - 1;
    }

    return lyricList.value.length - 1;
  };

  const lyricListRef = ref();
  let lyricContainerHeight = 0;
  let maxOffset = 0;

  onMounted(() => {
    lyricContainerHeight = lyricListRef.value.clientHeight;
    maxOffset = lyricContainerHeight - 450;
  });

  const setOffset = () => {
    // console.log('lyricContainerHeight', lyricContainerHeight);
    // console.log('maxOffset', maxOffset);

    const index = findHightlightIndex();
    console.log('index', index);

    currentIndex.value = index;
    let offset = 32 * index + 32 / 2 - 450 / 2;
    console.log('offset', offset);

    if (offset < 0) offset = 0;

    if (offset > maxOffset) offset = maxOffset + 50;

    lyricListRef.value.style.transform = `translateY(-${offset}px)`;

    console.log('lyricListRef', lyricListRef.value.style);
  };

  const updateTime = () => {
    setOffset();
  };

  return {
    currentIndex,
    lyricList,
    musicAudioRef,
    lyricListRef,
    updateTime
  };
}
