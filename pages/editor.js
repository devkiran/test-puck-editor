import { Puck } from "@measured/puck";
import "@measured/puck/dist/index.css";

import HeroBlock from "@/blocks/Hero";

const config = {
  components: {
    HeroBlock: {
      fields: {
        title: {
          type: "text",
        },
        subtitle: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Hello, world!",
        subtitle: "This is a subtitle",
      },
      render: ({ title, subtitle }) => {
        return <HeroBlock title={title} subtitle={subtitle} />;
      },
    },
  },
};

const initialData = {
  content: [],
  root: {},
};

const save = (data) => {
  console.log(data);
};

export default function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}

