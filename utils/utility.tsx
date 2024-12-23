export const languages = [
    {
      name: "JavaScript",
      icon: "icons/javascript.svg",
    },
    {
      name: "HTML",
      icon: "icons/html.svg",
    },
    {
      name: "CSS",
      icon: "icons/css.svg",
    },
    {
      name: "Python",
      icon: "icons/python.svg",
    },
    {
      name: "Java",
      icon: "icons/java.svg",
    },
    {
      name: "TypeScript",
      icon: "icons/typescript.svg",
    },
  ];
  export const getExtension = (language: string) => {
    switch (language) {
      case "JavaScript":
        return ".js";
      case "HTML":
        return ".html";
      case "CSS":
        return ".css";
      case "Python":
        return ".py";
      case "Java":
        return ".java";
      case "TypeScript":
        return ".ts";
      default:
        return ".js";
    }
  };
  
  export const themes = ["monokai", "twilight", "terminal"];
  
  export const backgrounds = [
    "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
    "linear-gradient(270deg,#514a9d,#24c6dc)",
    "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
    "linear-gradient(354deg,#ff75b5,#ffb86c)",
   
    "#000",
    "#fff",
    "linear-gradient(270deg,#fc6767,#ec008c)",
    
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#F1C40F", // Yellow
    "#8E44AD", // Purple
    "#E67E22", // Orange
    "#3498DB", // Light Blue
    "#2ECC71", // Light Green
    "#95A5A6", // Grey
    "#C0392B", // Dark Red
    
  ];
  
  export const initialCode = `function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}


const number = 7;

`;