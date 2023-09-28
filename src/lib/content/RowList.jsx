export function RowList({ rows }) {
  return (
    <div className="RowList">
      {rows.map((row) => (
        <div className="Row" key={row.id}>
          {row.content}
        </div>
      ))}
    </div>
  );
}

// export const languagesItems = {
//   icons: [
//     {
//       path: "/src/assets/images/icons/skills/html.png",
//       alt: "html",
//       title: "HTML",
//     },
//     {
//       path: "/src/assets/images/icons/skills/css.png",
//       alt: "css",
//       title: "CSS",
//     },
//     {
//       path: "/src/assets/images/icons/skills/javascript.png",
//       alt: "javascript",
//       title: "JavaScript",
//     },
//     { path: "/src/assets/images/mysqlLogo.jpg", alt: "MySQL", title: "MySQL" },
//     {
//       path: "/src/assets/images/icons/skills/mongo-db.png",
//       alt: "MongoDB",
//       title: "MongoDB",
//     },
//   ],
// };

// export const frameworksItems = {
//   icons: [
//     {
//       path: "/src/assets/images/icons/skills/react.png",
//       alt: "React",
//       title: "React",
//     },
//     {
//       path: "/src/assets/images/icons/skills/nodejswhite.png",
//       alt: "NodeJS",
//       title: "NodeJS",
//     },
//     {
//       path: "/src/assets/images/handlebarsLogo.png",
//       alt: "Handlebarsjs",
//       title: "Handlebars.js",
//     },
//   ],
// };

// export const toolsItems = {
//   icons: [
//     {
//       path: "/src/assets/images/icons/skills/illustrator.png",
//       alt: "Adobe Illustrator",
//       title: "Adobe Illustrator",
//     },
//     {
//       path: "/src/assets/images/icons/skills/insomnia.png",
//       alt: "Insomnia ",
//       title: "Insomnia ",
//     },
//   ],
// };
