import { mergeAttributes, Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";

import TiptapPdf from "./TiptapPdf.vue";

export default Node.create({
  name: "TiptapPdfWrapper",

  group: "block",

  //   content: "block+",

  atom: true,

  draggable: true,

  addAttributes() {
    return {
      source: {
        default: "",
      },
      //   count: {
      //     default: 0,
      //   },
    };
  },

  parseHTML() {
    return [
      {
        tag: "TiptapPdf",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["TiptapPdf", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return VueNodeViewRenderer(TiptapPdf);
  },
});
