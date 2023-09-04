<template>
  <div class="spinning-wheel">
    <div class="wheel" v-show="showWheel">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        :viewBox="`0 0 ${dimension} ${dimension}`"
      >
        <g ref="wheel">
          <path
            d="M509.6,46.5C333.8-32.8,127.1,45.4,47.9,221.2A349.1,349.1,0,0,0,149.6,638.6C301,758,520.6,732.1,640,580.7a348.9,348.9,0,0,0,.9-430.9,357,357,0,0,0-27.6-31.3A348.6,348.6,0,0,0,509.6,46.5Z"
            fill="#fff"
          />
          <path
            d="M500.1,67.5C350-.3,172.9,54.6,87.3,195.3,9.1,323.4,28.8,488.4,134.8,594.7a340.6,340.6,0,0,0,29.1,25.9c141.2,111.7,346.2,87.8,457.9-53.4a326.1,326.1,0,0,0,1-403.3A376.4,376.4,0,0,0,597,134.7,326.5,326.5,0,0,0,500.1,67.5Z"
            fill="#3f3c42"
          />
          <g>
            <g v-for="(path, index) in slices" :key="index">
              <path
                stroke="black"
                v-bind="path.slice"
                :ref="(el) => addSliceRef(el, path, index)"
              ></path>
              <circle
                :cx="path.slice.fromCoordX"
                :cy="path.slice.fromCoordY"
                r="10"
                fill="gray"
              />
              <circle
                v-if="index === slices.length - 1"
                :cx="path.slice.toCoordX"
                :cy="path.slice.toCoordY"
                r="10"
                fill="gray"
              />
              <defs>
                <path :d="path.slice.defD" :id="`p${index}`"></path>
              </defs>
              <text v-bind="path.label">
                <textPath
                  :xlink:href="`#p${index}`"
                  startOffset="50%"
                  text-anchor="middle"
                >
                  {{ path.label.text }}
                </textPath>
              </text>
            </g>
          </g>
          <g opacity="0.13">
            <path
              d="M365.9,49c174.4.1,315.7,141.6,315.6,316a315.6,315.6,0,0,1-45.1,162.5A320.6,320.6,0,0,1,527.4,636a315.8,315.8,0,0,1-357.1-23.5,353.2,353.2,0,0,1-28.1-25.2c-123-123.5-122.5-323.4,1-446.3A315.3,315.3,0,0,1,347.3,49.6q9.3-.6,18.6-.6m0-12c-6.4,0-12.9.2-19.3.6C166,48.1,28.2,202.9,38.7,383.5a328.1,328.1,0,0,0,267,303.3c177.8,33.3,349-83.9,382.3-261.7S603.9,75.8,425.9,42.6A326.8,326.8,0,0,0,365.9,37Z"
            />
          </g>
          <g>
            <path
              d="M397.6,306.2a66.3,66.3,0,0,0-61.2,3.6,59.4,59.4,0,0,0-12.5,9.8,63.4,63.4,0,0,0-9.9,12.5,66,66,0,0,0-3.9,61.2A68.4,68.4,0,0,0,323.6,413c1.9,1.8,3.8,3.5,5.9,5.2a66,66,0,0,0,92.9-92.4,48.8,48.8,0,0,0-5.2-5.9A63.6,63.6,0,0,0,397.6,306.2Z"
              opacity="0.18"
              style="isolation: isolate"
            />
            <path
              d="M393.1,304.5a66.1,66.1,0,0,0-87.5,87.1,68.4,68.4,0,0,0,13.5,19.7c1.9,1.8,3.9,3.6,5.9,5.2a66.9,66.9,0,0,0,28.8,13.1,68.5,68.5,0,0,0,31.5-1.8,65.8,65.8,0,0,0,45.5-74.9,63.3,63.3,0,0,0-12.9-28.8,74.5,74.5,0,0,0-5.2-6A66.3,66.3,0,0,0,393.1,304.5Z"
              fill="#fff"
            />
            <path
              d="M384.4,323.7a42.9,42.9,0,0,0-21.2-3.9,43.6,43.6,0,0,0-20.5,6.3A44.9,44.9,0,0,0,324.8,383a43.9,43.9,0,0,0,9.2,13.4l4,3.6a44.4,44.4,0,0,0,19.6,8.9,43.5,43.5,0,0,0,21.5-1.2,46.1,46.1,0,0,0,18.5-11.1,45.3,45.3,0,0,0,12.6-40,44.4,44.4,0,0,0-8.9-19.6,26.4,26.4,0,0,0-3.5-4A44.2,44.2,0,0,0,384.4,323.7Z"
              fill="#efefef"
            />
            <path
              d="M370.4,354.7a9.4,9.4,0,0,0-5.2-1,9.9,9.9,0,0,0-5,1.6,11.6,11.6,0,0,0-2.1,1.6,8.3,8.3,0,0,0-1.6,2.1,9.9,9.9,0,0,0-1.6,5,11.4,11.4,0,0,0,.9,5.2,15,15,0,0,0,2.3,3.3,3.9,3.9,0,0,0,1,.8,10.6,10.6,0,0,0,4.8,2.2,11.5,11.5,0,0,0,5.2-.3,9.9,9.9,0,0,0,4.5-2.7,10.1,10.1,0,0,0,2.8-4.5,11.8,11.8,0,0,0,.3-5.3,10.4,10.4,0,0,0-2.1-4.8l-.9-1A11.9,11.9,0,0,0,370.4,354.7Z"
              fill="#666"
            />
          </g>
          <path
            d="M364.5,31h0a5.5,5.5,0,0,1-5.5-5.5V5.5A5.5,5.5,0,0,1,364.5,0h0A5.5,5.5,0,0,1,370,5.5v20A5.5,5.5,0,0,1,364.5,31ZM370,723.6v-20a5.5,5.5,0,0,0-5.5-5.5h0a5.5,5.5,0,0,0-5.5,5.5v20a5.5,5.5,0,0,0,5.5,5.5h0a5.5,5.5,0,0,0,5.5-5.5ZM703.5,370.1h20.1a5.5,5.5,0,0,0,5.5-5.5h0a5.5,5.5,0,0,0-5.5-5.5H703.5a5.5,5.5,0,0,0-5.4,5.5h0A5.5,5.5,0,0,0,703.5,370.1Zm-698.1,0H25.5a5.5,5.5,0,0,0,5.5-5.5h0a5.5,5.5,0,0,0-5.5-5.5H5.4A5.5,5.5,0,0,0,0,364.6H0A5.5,5.5,0,0,0,5.4,370.1ZM538.7,73.6l10-17.3a5.5,5.5,0,0,0-2-7.5h0a5.5,5.5,0,0,0-7.5,2l-10,17.3a5.2,5.2,0,0,0,1.7,7.3l.3.2h0A5.5,5.5,0,0,0,538.7,73.6ZM189.9,678.3l10-17.3a5.5,5.5,0,0,0-2-7.5h0a5.5,5.5,0,0,0-7.5,2l-10,17.4a5.4,5.4,0,0,0,1.8,7.4h.2a5.5,5.5,0,0,0,7.5-2.1Zm9.8-610L189.6,50.9a5.5,5.5,0,0,0-7.5-2h0a5.5,5.5,0,0,0-2,7.5l10.1,17.4a5.4,5.4,0,0,0,7.4,2h0a5.5,5.5,0,0,0,2.1-7.5ZM548.9,672.7l-10-17.3a5.5,5.5,0,0,0-7.5-2h0a5.5,5.5,0,0,0-2,7.5l10,17.3a5.5,5.5,0,0,0,7.5,2h0A5.5,5.5,0,0,0,548.9,672.7ZM660.4,198.9l17.3-10.1a5.5,5.5,0,0,0,2-7.5h0a5.4,5.4,0,0,0-7.4-2h-.1l-17.4,10a5.4,5.4,0,0,0-2,7.4h.1A5.5,5.5,0,0,0,660.4,198.9ZM56.9,549.8l17.3-10.1a5.5,5.5,0,0,0,2-7.5h0a5.6,5.6,0,0,0-7.5-2L51.3,540.3a5.4,5.4,0,0,0-2,7.4h.1A5.5,5.5,0,0,0,56.9,549.8ZM73.6,190.3l-17.3-10a5.5,5.5,0,0,0-7.5,2h0a5.5,5.5,0,0,0,2,7.5l17.4,10a5.6,5.6,0,0,0,7.5-2h0a5.5,5.5,0,0,0-2.1-7.5ZM678.2,539.4l-17.3-10a5.2,5.2,0,0,0-7.3,1.7l-.2.3h0a5.6,5.6,0,0,0,2,7.5l17.3,10a5.5,5.5,0,0,0,7.5-2h0A5.5,5.5,0,0,0,678.2,539.4Z"
            fill="#fff"
          />
        </g>
        <g ref="indicator">
          <path
            d="M709.3,156.5c-11.8-18.1-36.9-22.9-55.8-10.6a41.9,41.9,0,0,0-13.8,14.6l-33.6,60.6a2.3,2.3,0,0,0,0,2.5,2.8,2.8,0,0,0,2.3,1.1l69-6.2a41.6,41.6,0,0,0,18.9-6.6C715.3,199.5,721.1,174.7,709.3,156.5Z"
            fill-opacity="0.22"
          />
          <path
            d="M714.3,153.3a39.4,39.4,0,0,0-54.4-11.6,38.8,38.8,0,0,0-13.1,14.2l-31.5,59.2a2.3,2.3,0,0,0,.1,2.5,2.4,2.4,0,0,0,2.2,1.1l66.9-4.8a39.9,39.9,0,0,0,18.3-6.2A39.4,39.4,0,0,0,714.3,153.3Z"
            fill="#fcfcfc"
          />
          <path
            d="M683.6,163.4a9.8,9.8,0,0,0-4.1,1.6,8.9,8.9,0,0,0-2.7,3.4,5.4,5.4,0,0,0-.8,2.1,14.9,14.9,0,0,0-.2,2.1,10.2,10.2,0,0,0,1.2,4.2,8.4,8.4,0,0,0,3,3.2,10.1,10.1,0,0,0,3,1.3h1.1a7.8,7.8,0,0,0,4.3-.6,9.2,9.2,0,0,0,3.5-2.6,9.5,9.5,0,0,0,1.9-3.9,9.3,9.3,0,0,0-.1-4.4,9.1,9.1,0,0,0-5.8-6.1l-1.1-.3A8.6,8.6,0,0,0,683.6,163.4Z"
            fill="#ccc"
          />
          <path
            d="M684,166.5a4.7,4.7,0,0,0-2.6,1.1,5.5,5.5,0,0,0-1.8,2.2,5,5,0,0,0-.5,1.3,6.6,6.6,0,0,0-.1,1.4,5.4,5.4,0,0,0,.8,2.8,6.4,6.4,0,0,0,1.9,2.1l2,.8h.7a5.9,5.9,0,0,0,5.1-2.1,6.8,6.8,0,0,0,1.2-2.6,5.3,5.3,0,0,0-.1-2.8,4.8,4.8,0,0,0-1.4-2.5,5.1,5.1,0,0,0-2.3-1.5l-.7-.2Z"
            fill="#666"
          />
        </g>
      </svg>
    </div>
    <slot name="activator" :spin="spin">
      <button class="default-button" @click="spin">Spin the wheel</button>
    </slot>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  segments: {
    type: Array,
    default: () => [...new Array(6)],
  },
  skip: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const radius = ref(325);
const deg = ref(0);
const showWheel = ref(true);
const slicesRefs = ref([]);
const lastRotation = ref(0);
const indicatorAngle = ref(334);

const wheel = ref(gsap.timeline());
const indicator = ref(gsap.timeline());

const dimension = computed(() => radius.value * 2 + 80);
const center = computed(() => ({
  x: dimension.value / 2,
  y: dimension.value / 2,
}));

const parsedSegments = computed(() =>
  props.segments.map((s, index) => ({
    ...s,
    slice: {
      fill: "white",
      ...s.slice,
    },
    label: {
      text: `Slice ${index}`,
      "font-size": 50,
      ...s.label,
    },
  }))
);

const rotation = computed(() => deg.value % 360);

const rotatedIndicator = computed(() => {
  const sum = indicatorAngle.value - rotation.value;
  return sum < 0 ? 360 + sum : sum;
});

const slices = computed(() =>
  parsedSegments.value.map((s, i) => {
    const mainPath = generateSlice(radius.value, i);
    return {
      ...s,
      slice: {
        ...s.slice,
        ...mainPath,
        defD: generateSlice(radius.value - 60, i).d,
      },
    };
  })
);

onMounted(() => {
  wheel.value = gsap.timeline();
  indicator.value = gsap.timeline();
  wheel.value.play();
  indicator.value
    .to(indicator.value, 0.13, {
      rotation: -10,
      transformOrigin: "65% 36%",
      ease: "Power1.easeOut",
    })
    .to(indicator.value, 0.13, {
      rotation: 3,
      backgroundColor: "red",
      transformOrigin: "65% 36%",
      ease: "Power1.easeOut",
    });
});

const setupWheel = () => {
  gsap.set(wheel.value, { rotation: 0 });
  gsap.to(wheel.value, 5, {
    rotation: deg.value,
    transformOrigin: "50% 50%",
    ease: "Power4.easeOut",
    onUpdate: onAnimationUpdate,
    onComplete: onAnimationComplete,
  });
};

const addSliceRef = (el, path, index) => {
  const sliceIndex = slicesRefs.value.findIndex((s) => s.id == path.id);
  if (sliceIndex === -1) {
    slicesRefs.value.push({ el, index, ...path });
  }
};

const spin = () => {
  deg.value = getRandomInt(720, 2400);
  showWheel.value = true;
  setupWheel();
};

const spinToNext = (destination) => {
  deg.value = destination;
  setupWheel();
};

const generateSlice = (r, i) => {
  const slicesCount = parsedSegments.value.length;
  const fromAngle = (i * 360) / slicesCount;
  const toAngle = ((i + 1) * 360) / slicesCount;
  const fromCoordX = center.value.x + r * Math.cos((fromAngle * Math.PI) / 180);
  const fromCoordY = center.value.y + r * Math.sin((fromAngle * Math.PI) / 180);
  const toCoordX = center.value.x + r * Math.cos((toAngle * Math.PI) / 180);
  const toCoordY = center.value.y + r * Math.sin((toAngle * Math.PI) / 180);
  return {
    d: `M${center.value.x},${center.value.y} L${fromCoordX},${fromCoordY} A${r},${r} 0 0,1 ${toCoordX},${toCoordY}z`,
    fromCoordX,
    fromCoordY,
    toCoordY,
    toCoordX,
    fromAngle,
    toAngle,
  };
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const onAnimationUpdate = () => {
  const currentRotation = Math.round(gsap.getProperty(wheel.value, "rotation"));
  const tolerance = currentRotation - lastRotation.value;
  console.log(indicator.value);
  if (
    Math.round(currentRotation) % (360 / parsedSegments.value.length) <=
    tolerance
  ) {
    if (
      gsap.getProperty(indicator.value, "progress") > 0.3 ||
      gsap.getProperty(indicator.value, "progress") === 0
    ) {
      gsap.to(indicator.value, { progress: 0 });
    }
  }
  lastRotation.value = currentRotation;
};

const onAnimationComplete = () => {
  for (const s of slicesRefs.value) {
    const fromAngle = s.slice.fromAngle;
    const toAngle = s.slice.toAngle;
    if (
      fromAngle < rotatedIndicator.value &&
      toAngle > rotatedIndicator.value
    ) {
      if (props.skip.value.includes(s.id)) {
        spinToNext(deg.value + 360 / slices.value.length);
        return;
      }
      $emit("result", { ...s, el: undefined });
      return;
    }
  }
};
</script>

<style>
.spinning-wheel {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinning-wheel .default-button {
  display: inline-block;
  padding: 0.7em 1.4em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.15em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  background-color: #3369ff;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;
}
</style>
