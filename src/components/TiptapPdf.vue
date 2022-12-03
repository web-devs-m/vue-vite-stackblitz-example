<template>
  <node-view-wrapper class="vue-component">
    <div
      style="max-width: 200px; max-height: 300px; overflow: auto"
      :class="{ selected: selected }"
    >
      <div
        class="drag-handle"
        contenteditable="false"
        draggable="true"
        data-drag-handle
      >
        Drag here
      </div>
      <VuePdfEmbed v-bind="$attrs" :source="node.attrs.source" />
    </div>
  </node-view-wrapper>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";
import { nodeViewProps, NodeViewWrapper } from "@tiptap/vue-3";

export default {
  inheritAttrs: false,
  components: {
    NodeViewWrapper,
    VuePdfEmbed,
  },

  props: {
    ...nodeViewProps,
  },

  data() {
    return {};
  },

  methods: {
    // increase() {
    //   this.updateAttributes({
    //     count: this.node.attrs.count + 1,
    //   })
    // },
  },
};
</script>

<style>
.selected {
  border: 3px solid blue;
}
</style>
