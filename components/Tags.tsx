interface ITag {
    name: `#${string}`;
    className: string;
  }
  
  const tags: ITag[] = [
    {
      name: "#Deporte",
      className: "bg-blue-500/50 text-blue-500",
    },
    {
      name: "#Mentalidad",
      className: "bg-orange-500/50 text-orange-500",
    },
    {
      name: "#Programación",
      className: "bg-red-500/50 text-red-500",
    },
  ];
  
  export default function Tags() {
    return (
      <div className="flex flex-row items-center gap-3">
        {tags.map((i, index) => (
          <span
            key={index}
            className={`px-3 inline-flex items-center p-1 rounded-md ${i.className}`}
          >
            {i.name}
          </span>
        ))}
      </div>
    );
  }
  