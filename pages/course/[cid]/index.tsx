import React from "react";
import type { GetServerSideProps } from "next";
import {
  CourseInfoJumbotron,
  CourseInfoJumbotronClassName,
  CourseInfoJumbotronStyle,
} from "../../../components/Jumbotron/CourseInfoJumbotron";
import HeaderBasePage from "../../../components/Page/HeaderBasePage";
import FullWidthColoredButton from "../../../components/Buttons/FullWidthColoredButton";

export interface ChooseLessonProps {
  cid: string;
  title: string;
  desc: string;
  tags: string[];
  backgroundImage: string;
}

export default function ChooseLesson({
  // cid,
  title,
  desc,
  tags,
  backgroundImage,
}: ChooseLessonProps) {
  return (
    <HeaderBasePage
      id="choose-course"
      title="選擇課程"
      full
      jumbotron={<CourseInfoJumbotron title={title} desc={desc} tags={tags} />}
      jumbotronStyle={CourseInfoJumbotronStyle(backgroundImage)}
      jumbotronClassName={CourseInfoJumbotronClassName}
    >
      <div className="flex justify-center justify-items-center">
        <div className="max-w-2xl">
          {new Array(25).fill("怎麼配置環境？").map((value, key) => (
            <FullWidthColoredButton
              onClick={() => {}}
              key={`${title}-${value}-${key - 1}`}
            >
              {value}
            </FullWidthColoredButton>
          ))}
        </div>
      </div>
    </HeaderBasePage>
  );
}

export const getServerSideProps: GetServerSideProps<ChooseLessonProps> =
  async ({ query: { cid } }) => ({
    props: {
      cid: typeof cid === "string" ? cid : "unknown",
      title: "沒有駭客學校，但你可以自學。",
      desc: "這套課程可以讓您從零基礎，搖身一變成為資安高手。",
      tags: ["資訊", "資安", "駭客"],
      // source: https://unsplash.com/photos/4hbJ-eymZ1o, thanks to Florian Olivo :)
      backgroundImage:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  });
