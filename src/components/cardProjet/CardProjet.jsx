import React from "react";
import SmallCard from "../SmallCard/SmallCardProjet";

function CardProjet() {
  const data = [
    {
      img: "img.png",
      tech: "React",
      date: "3 days ago",
      title: "App Students Projets",
      desc: "Une application qui regroupes tous les project effectuer par les etudiant de la Goma digital Academy",
      avatar: "Avatar.png",
      auth: "Samuel mbabhazi",
      clean: 75,
      fonct: 64,
      design: 82,
    },
  ];
  return (
    <div className="">
      {data.map((projet) => (
        <div className="text-left relative shadow-lg w-[350px]  bg-white border border-gray-200 rounded-2xl ">
          <a href="#">
            <img className="rounded-t-2xl " src={projet.img} alt="" />
          </a>

          <div className="flex justify-between mt-2 pl-5 pr-5">
            <div className="ext-sm font-light text-gray-500 ">
              {projet.tech}
            </div>
            <div className="text-sm font-light text-gray-500 ">
              {projet.date}
            </div>
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {projet.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 max-[680px]:text-[13px]">
              {projet.desc}
            </p>
            <div className="flex  justify-between">
              <div className="flex gap-2 justify-start items-center mt-2 mb-2">
                <img
                  className="rounded-full w-10 h-10"
                  src={projet.avatar}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium  text-left">
                  <div className="ext-sm font-light text-[#D92950]">
                    {projet.auth}
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#D92950]"
              >
                Voir plus
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute top-20 left-48">
            <SmallCard
              clean={projet.clean}
              fonct={projet.fonct}
              design={projet.design}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProjet;
