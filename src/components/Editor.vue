<template>
  <div v-if="editor">
    <button @click="copyContentJson">Copy Content (JSON)</button>
    <button @click="copyContentHTML">Copy Content (HTML)</button>
    <button @click="copyContent">Copy Content (Plain Text)</button>
    <button @click="addVideo">Add Video</button>
    <button @click="addImage">setImage</button>
    <input
      type="color"
      @input="
        editor
          .chain()
          .focus()
          .setColor(($event as any).target?.value)
          .run()
      "
      :value="editor.getAttributes('textStyle').color"
    />
    <button
      @click="editor.chain().focus().setColor('#958DF1').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#958DF1' }),
      }"
    >
      purple
    </button>
    <button
      @click="editor.chain().focus().setColor('#F98181').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#F98181' }),
      }"
    >
      red
    </button>
    <button
      @click="editor.chain().focus().setColor('#FBBC88').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#FBBC88' }),
      }"
    >
      orange
    </button>
    <button
      @click="editor.chain().focus().setColor('#FAF594').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#FAF594' }),
      }"
    >
      yellow
    </button>
    <button
      @click="editor.chain().focus().setColor('#70CFF8').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#70CFF8' }),
      }"
    >
      blue
    </button>
    <button
      @click="editor.chain().focus().setColor('#94FADB').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#94FADB' }),
      }"
    >
      teal
    </button>
    <button
      @click="editor.chain().focus().setColor('#B9F18D').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#B9F18D' }),
      }"
    >
      green
    </button>
    <button @click="editor.chain().focus().unsetColor().run()">
      unsetColor
    </button>
    <button
      @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'is-active': editor.isActive('blockquote') }"
    >
      toggleBlockquote
    </button>
    <button
      @click="editor.chain().focus().setBlockquote().run()"
      :disabled="!editor.can().setBlockquote()"
    >
      setBlockquote
    </button>
    <button
      @click="editor.chain().focus().unsetBlockquote().run()"
      :disabled="!editor.can().unsetBlockquote()"
    >
      unsetBlockquote
    </button>
    <button
      @click="editor.chain().focus().toggleUnderline().run()"
      :class="{ 'is-active': editor.isActive('underline') }"
    >
      toggleUnderline
    </button>
    <button
      @click="editor.chain().focus().setUnderline().run()"
      :disabled="editor.isActive('underline')"
    >
      setUnderline
    </button>
    <button
      @click="editor.chain().focus().unsetUnderline().run()"
      :disabled="!editor.isActive('underline')"
    >
      unsetUnderline
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('left').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
    >
      left
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('center').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
    >
      center
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('right').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
    >
      right
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('justify').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
    >
      justify
    </button>
    <button @click="editor.chain().focus().unsetTextAlign().run()">
      unsetTextAlign
    </button>
    <button
      @click="editor.chain().focus().toggleSubscript().run()"
      :class="{ 'is-active': editor.isActive('subscript') }"
    >
      toggleSubscript
    </button>
    <button
      @click="editor.chain().focus().setSubscript().run()"
      :disabled="editor.isActive('subscript')"
    >
      setSubscript
    </button>
    <button
      @click="editor.chain().focus().unsetSubscript().run()"
      :disabled="!editor.isActive('subscript')"
    >
      unsetSubscript
    </button>
    <button
      @click="editor.chain().focus().toggleSuperscript().run()"
      :class="{ 'is-active': editor.isActive('superscript') }"
    >
      toggleSuperscript
    </button>
    <button
      @click="editor.chain().focus().setSuperscript().run()"
      :disabled="editor.isActive('superscript')"
    >
      setSuperscript
    </button>
    <button
      @click="editor.chain().focus().unsetSuperscript().run()"
      :disabled="!editor.isActive('superscript')"
    >
      unsetSuperscript
    </button>
    <button
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }"
    >
      toggleBulletList
    </button>
    <button
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor.isActive('orderedList') }"
    >
      toggleOrderedList
    </button>
    <button
      @click="editor.chain().focus().splitListItem('listItem').run()"
      :disabled="!editor.can().splitListItem('listItem')"
    >
      splitListItem
    </button>
    <button
      @click="editor.chain().focus().sinkListItem('listItem').run()"
      :disabled="!editor.can().sinkListItem('listItem')"
    >
      sinkListItem
    </button>
    <button
      @click="editor.chain().focus().liftListItem('listItem').run()"
      :disabled="!editor.can().liftListItem('listItem')"
    >
      liftListItem
    </button>
    <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
      setLink
    </button>
    <button
      @click="editor.chain().focus().unsetLink().run()"
      :disabled="!editor.isActive('link')"
    >
      unsetLink
    </button>
    <button
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().undo()"
    >
      undo
    </button>
    <button
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().redo()"
    >
      redo
    </button>
    <button
      @click="editor.chain().focus().toggleCode().run()"
      :class="{ 'is-active': editor.isActive('code') }"
    >
      toggleCode
    </button>
    <button
      @click="editor.chain().focus().setCode().run()"
      :disabled="editor.isActive('code')"
    >
      setCode
    </button>
    <button
      @click="editor.chain().focus().unsetCode().run()"
      :disabled="!editor.isActive('code')"
    >
      unsetCode
    </button>

    <button
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor.isActive('codeBlock') }"
    >
      toggleCodeBlock
    </button>
    <button
      @click="editor.chain().focus().setCodeBlock().run()"
      :disabled="editor.isActive('codeBlock')"
    >
      setCodeBlock
    </button>
    <button
      @click="editor.chain().focus().toggleHighlight().run()"
      :class="{ 'is-active': editor.isActive('highlight') }"
    >
      toggleHighlight
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#ffc078' }),
      }"
    >
      orange
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#8ce99a' }),
      }"
    >
      green
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#74c0fc' }),
      }"
    >
      blue
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#b197fc' }),
      }"
    >
      purple
    </button>
    <button
      @click="editor.chain().focus().toggleHighlight({ color: 'red' }).run()"
      :class="{ 'is-active': editor.isActive('highlight', { color: 'red' }) }"
    >
      red ('red')
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#ffa8a8' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#ffa8a8' }),
      }"
    >
      red (#ffa8a8)
    </button>
    <button
      @click="editor.chain().focus().unsetHighlight().run()"
      :disabled="!editor.isActive('highlight')"
    >
      unsetHighlight
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run()
      "
    >
      insertTable
    </button>
    <button @click="editor.chain().focus().addColumnBefore().run()">
      addColumnBefore
    </button>
    <button @click="editor.chain().focus().addColumnAfter().run()">
      addColumnAfter
    </button>
    <button @click="editor.chain().focus().deleteColumn().run()">
      deleteColumn
    </button>
    <button @click="editor.chain().focus().addRowBefore().run()">
      addRowBefore
    </button>
    <button @click="editor.chain().focus().addRowAfter().run()">
      addRowAfter
    </button>
    <button @click="editor.chain().focus().deleteRow().run()">deleteRow</button>
    <button @click="editor.chain().focus().deleteTable().run()">
      deleteTable
    </button>
    <button @click="editor.chain().focus().mergeCells().run()">
      mergeCells
    </button>
    <button @click="editor.chain().focus().splitCell().run()">splitCell</button>
    <button @click="editor.chain().focus().toggleHeaderColumn().run()">
      toggleHeaderColumn
    </button>
    <button @click="editor.chain().focus().toggleHeaderRow().run()">
      toggleHeaderRow
    </button>
    <button @click="editor.chain().focus().toggleHeaderCell().run()">
      toggleHeaderCell
    </button>
    <button @click="editor.chain().focus().mergeOrSplit().run()">
      mergeOrSplit
    </button>
    <button
      @click="editor.chain().focus().setCellAttribute('colspan', 2).run()"
    >
      setCellAttribute
    </button>
    <button @click="editor.chain().focus().fixTables().run()">fixTables</button>
    <button @click="editor.chain().focus().goToNextCell().run()">
      goToNextCell
    </button>
    <button @click="editor.chain().focus().goToPreviousCell().run()">
      goToPreviousCell
    </button>
    <button
      @click="editor.chain().focus().toggleTaskList().run()"
      :class="{ 'is-active': editor.isActive('taskList') }"
    >
      toggleTaskList
    </button>
    <button
      @click="editor.chain().focus().splitListItem('taskItem').run()"
      :disabled="!editor.can().splitListItem('taskItem')"
    >
      splitListItem
    </button>
    <button
      @click="editor.chain().focus().sinkListItem('taskItem').run()"
      :disabled="!editor.can().sinkListItem('taskItem')"
    >
      sinkListItem
    </button>
    <button
      @click="editor.chain().focus().liftListItem('taskItem').run()"
      :disabled="!editor.can().liftListItem('taskItem')"
    >
      liftListItem
    </button>
  </div>
  <div v-if="editor" style="position: relative">
    <bubble-menu
      class="bubble-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        Bold
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        Italic
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        Strike
      </button>
    </bubble-menu>

    <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        Bullet List
      </button>
    </floating-menu>
    <editor-content :editor="editor" />
  </div>
  <div class="character-count" v-if="editor">
    {{ editor.storage.characterCount.characters() }}/{{ limit }} characters
    <br />
    {{ editor.storage.characterCount.words() }} words
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { tryOnMounted, tryOnBeforeUnmount, useClipboard } from "@vueuse/core";
import {
  BubbleMenu,
  Editor,
  EditorContent,
  FloatingMenu,
  VueNodeViewRenderer,
} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Text from '@tiptap/extension-text';
import Youtube from "@tiptap/extension-youtube";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Mention from "@tiptap/extension-mention";
import Placeholder from "@tiptap/extension-placeholder";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
// import Blockquote from '@tiptap/extension-blockquote';
import Table from "@tiptap/extension-table"; // its borken for some reason
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Typography from "@tiptap/extension-typography";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
// load all highlight.js languages
import { lowlight } from "lowlight";

import suggestion from "./suggestion";
import CodeBlockComponent from "./CodeBlockComponent.vue";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("javascript", js);
lowlight.registerLanguage("ts", ts);
lowlight.registerLanguage("typescript", ts);

const editor = ref<Editor | undefined>(undefined);
const limit = ref(10000);
const { text, copy, copied, isSupported } = useClipboard({ legacy: true });

const copyContent = async () => {
  const content = editor.value?.getText({
    blockSeparator: "\n\n",
    textSerializers: {
      youtube: ({ node }) => {
        console.log("Youtube|node -> ", node);
        return `![](${node.attrs.src})\n\n`;
      },
      image: ({ node }) => {
        console.log("Image|node ->", node);
        return `![${node.attrs.alt || ""}](${node.attrs.src})\n\n`;
      },
    },
  });
  console.log(content);
  if (!content) {
    return;
  }
  await copy(content);
};

const copyContentJson = async () => {
  const contentJson = editor.value?.getJSON() || {};
  console.log(contentJson);
  await copy(JSON.stringify(contentJson));
};

const copyContentHTML = async () => {
  const contentHtml = editor.value?.getHTML() || "";
  console.log(contentHtml);
  await copy(contentHtml);
};

const initalContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "Let‘s make sure people can’t write more than 280 characters. I bet you could build one of the biggest social networks on that idea. 🎉",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "That’s a boring paragraph followed by a fenced code block:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "javascript",
      },
      content: [
        {
          type: "text",
          text: 'for (var i=1; i <= 20; i++)\n{\n  if (i % 15 == 0)\n    console.log("FizzBuzz");\n  else if (i % 3 == 0)\n    console.log("Fizz");\n  else if (i % 5 == 0)\n    console.log("Buzz");\n  else\n    console.log(i);\n}',
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "This isn’t highlighted.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "highlight",
              attrs: {
                color: "",
              },
            },
          ],
          text: "But that one is.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "highlight",
              attrs: {
                color: "red",
              },
            },
          ],
          text: "And this is highlighted too, but in a different color.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "highlight",
              attrs: {
                color: "#ffa8a8",
              },
            },
          ],
          text: "And this one has a data attribute.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://source.unsplash.com/K9QHL52rE2k/100x100",
        alt: null,
        title: null,
      },
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
    },
    {
      type: "image",
      attrs: {
        src: "data:image/jpeg;base64,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",
        alt: "a random image from unsplash.com",
        title: null,
      },
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "Wow, this editor has support for links to the whole ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://en.wikipedia.org/wiki/World_Wide_Web",
                target: "_blank",
                class: null,
              },
            },
          ],
          text: "world wide web",
        },
        {
          type: "text",
          text: ". We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://statamic.com/",
                target: "_blank",
                class: null,
              },
            },
          ],
          text: "another one!",
        },
        {
          type: "text",
          text: " Yep, seems to work.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Mentions",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "Hi everyone! Don’t forget the daily stand up at 8 AM.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "mention",
          attrs: {
            id: "Jennifer Grey",
            label: null,
          },
        },
        {
          type: "text",
          text: " Would you mind to share what you’ve been working on lately? We fear not much happened since Dirty Dancing.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "mention",
          attrs: {
            id: "Winona Ryder",
            label: null,
          },
        },
        {
          type: "text",
          text: " ",
        },
        {
          type: "mention",
          attrs: {
            id: "Axl Rose",
            label: null,
          },
        },
        {
          type: "text",
          text: " Let’s go through your most important points quickly.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "I have a meeting with ",
        },
        {
          type: "mention",
          attrs: {
            id: "Christina Applegate",
            label: null,
          },
        },
        {
          type: "text",
          text: " and don’t want to come late.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "– Thanks, your big boss",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Superscript & subscript",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "This is regular text.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "superscript",
            },
          ],
          text: "This is superscript.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "",
              },
            },
            {
              type: "superscript",
            },
          ],
          text: "And this.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "subscript",
            },
          ],
          text: "This is subscript.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "",
              },
            },
            {
              type: "subscript",
            },
          ],
          text: "And this.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Task List",
        },
      ],
    },
    {
      type: "taskList",
      content: [
        {
          type: "taskItem",
          attrs: {
            checked: true,
          },
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "A list item",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "And another one",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Text Alignment",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "first paragraph",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "center",
      },
      content: [
        {
          type: "text",
          text: "second paragraph",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "right",
      },
      content: [
        {
          type: "text",
          text: "third paragraph",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "hardBreak",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Underlines",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "There is no underline here.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "underline",
            },
          ],
          text: "This is underlined though.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "underline",
            },
          ],
          text: "And this as well.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Typography",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "“I have been suffering from Typomania all my life, a sickness that is incurable but not lethal.”",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "— Erik Spiekermann, December 2008",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Blockquote",
        },
      ],
    },
    {
      type: "blockquote",
      content: [
        {
          type: "paragraph",
          attrs: {
            textAlign: "left",
          },
          content: [
            {
              type: "text",
              text: "Nothing is impossible, the word itself says “I’m possible!”",
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "TextStyle & Color",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "rgb(149, 141, 241)",
              },
            },
          ],
          text: "Oh, for some reason that’s purple.",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "Markdown shortcuts make it easy to format the text while typing.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "To test that, start a new line and type ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "#",
        },
        {
          type: "text",
          text: " followed by a space to get a heading. Try ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "#",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "##",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "###",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "####",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "#####",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "######",
        },
        {
          type: "text",
          text: " for different levels.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "Those conventions are called input rules in tiptap. Some of them are enabled by default. Try ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ">",
        },
        {
          type: "text",
          text: " for blockquotes, ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "*",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "-",
        },
        {
          type: "text",
          text: " or ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "+",
        },
        {
          type: "text",
          text: " for bullet lists, or ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "`foobar`",
        },
        {
          type: "text",
          text: " to highlight code, ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "~~tildes~~",
        },
        {
          type: "text",
          text: " to strike text, or ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "==equal signs==",
        },
        {
          type: "text",
          text: " to highlight text.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "You can overwrite existing input rules or add your own to nodes, marks and extensions.",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "For example, we added the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Typography",
        },
        {
          type: "text",
          text: " extension here. Try typing ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "(c)",
        },
        {
          type: "text",
          text: " to see how it’s converted to a proper © character. You can also try ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "->",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ">>",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "1/2",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "!=",
        },
        {
          type: "text",
          text: ", or ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "--",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Tables",
        },
      ],
    },
    {
      type: "table",
      content: [
        {
          type: "tableRow",
          content: [
            {
              type: "tableHeader",
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "Name",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: {
                colspan: 3,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "Description",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "Cyndi Lauper",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "singer",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "songwriter",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: {
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "actress",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Youtube Video",
        },
      ],
    },
    {
      type: "youtube",
      attrs: {
        src: "https://www.youtube.com/watch?v=cqHqLQgVCgY",
        start: 0,
        width: 640,
        height: 480,
      },
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "Try adding your own video to this editor!",
        },
      ],
    },
  ],
};

tryOnMounted(() => {
  editor.value = new Editor({
    // content2: '',
    // content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    content: initalContent,
    extensions: [
      StarterKit.configure({
        // Disable an included extension
        codeBlock: false,
      }),
      Typography,
      TextStyle,
      Color,
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      Superscript,
      Subscript,
      Underline,
      CharacterCount.configure({ limit: limit.value }),
      Highlight.configure({ multicolor: true }),
      Youtube.configure({
        nocookie: true,
        controls: true,
        allowFullscreen: true,
        autoplay: false,
      }),
      CodeBlockLowlight.extend({
        addNodeView() {
          return VueNodeViewRenderer(CodeBlockComponent);
        },
      }).configure({ lowlight }),
      Link.configure({
        openOnClick: false,
      }),
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion,
      }),
      Placeholder.configure({
        // Use a placeholder:
        placeholder: "Write something …",
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),
      // --- Table extensions ----
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
  });
});

tryOnBeforeUnmount(() => {
  editor.value?.destroy();
});

const addVideo = () => {
  const url = prompt(
    "Enter YouTube URL",
    "https://www.youtube.com/watch?v=b61rtYhuyag"
  );

  if (!url) {
    return;
  }

  editor.value?.commands.setYoutubeVideo({
    src: url,
    width: 640,
    height: 480,
  });
};

const addImage = () => {
  // editor.value?.chain().focus().setImage({ src: 'https://source.unsplash.com/K9QHL52rE2k/100x100', alt: 'a random image from unsplash.com' }).run()
  editor.value
    ?.chain()
    .focus()
    .setImage({
      src: "data:image/jpeg;base64,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",
      alt: "a random image from unsplash.com",
    })
    .run();
};

const setLink = () => {
  const previousUrl = editor.value?.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);

  // cancelled
  if (url === null) {
    return;
  }

  // empty
  if (url === "") {
    editor.value?.chain().focus().extendMarkRange("link").unsetLink().run();

    return;
  }

  // update link
  editor.value
    ?.chain()
    .focus()
    .extendMarkRange("link")
    .setLink({ href: url })
    .run();
};
</script>

<style lang="scss">
/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

/* Placeholder (on every new line) */
/*.ProseMirror p.is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}*/

/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }

    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }

  iframe {
    border: 8px solid #000;
    border-radius: 4px;
    min-width: 200px;
    min-height: 200px;
    display: block;
    outline: 0px solid transparent;
  }

  div[data-youtube-video] {
    cursor: move;
    padding-right: 24px;
  }

  .ProseMirror-selectednode iframe {
    transition: outline 0.15s;
    outline: 6px solid #ece111;
  }
}

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

mark {
  background-color: #ffe066;
  padding: 0.125em 0;
  border-radius: 0.25em;
  box-decoration-break: clone;
}

.mention {
  border: 1px solid #000;
  border-radius: 0.4rem;
  padding: 0.1rem 0.3rem;
  box-decoration-break: clone;
}

ul[data-type="taskList"] {
  list-style: none;
  padding: 0;

  p {
    margin: 0;
  }

  li {
    display: flex;

    > label {
      flex: 0 0 auto;
      margin-right: 0.5rem;
      user-select: none;
    }

    > div {
      flex: 1 1 auto;
    }
  }
}

.bubble-menu {
  display: flex;
  background-color: #0d0d0d;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

.floating-menu {
  display: flex;
  background-color: #0d0d0d10;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
</style>
