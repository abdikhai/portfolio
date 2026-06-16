import React, { memo } from "react";
import {
  Globe,
  Database,
  Map,
  MapPin,
  Terminal,
  FlaskConical,
  Layout,
  Smartphone,
  Brain,
  Cloud,
  Table,
  FileSpreadsheet,
  Palette,
  BarChart2,
  PieChart,
  Braces,
  Code2,
  Eye,
  Code
} from "lucide-react";

const tagIconMap = {
  // PHP / Laravel
  laravel: Globe,
  php: Code2,

  // GIS / Mapping
  gis: Map,
  "leaflet.js": MapPin,

  // Python & Data Science
  python: Terminal,
  flask: FlaskConical,
  pandas: Table,
  sqlalchemy: Database,
  openpyxl: FileSpreadsheet,
  streamlit: Layout,
  eda: BarChart2,
  "data visualization": PieChart,
  opencv: Eye,

  // Frontend / General Programming
  javascript: Braces,
  js: Braces,
  jquery: Code2,
  bootstrap: Layout,
  "tailwind css": Palette,
  "next.js": Globe,

  // Mobile / Cloud / ML
  android: Smartphone,
  tensorflow: Brain,
  "google cloud": Cloud,
  "machine learning": Brain,
  svm: Brain,
};

const tagColorMap = {
  laravel: "hover:text-[#FF2D20] hover:border-[#FF2D20]/40 hover:bg-[#FF2D20]/5",
  php: "hover:text-[#8892BF] hover:border-[#8892BF]/40 hover:bg-[#8892BF]/5",
  gis: "hover:text-[#818CF8] hover:border-[#818CF8]/40 hover:bg-[#818CF8]/5",
  "leaflet.js": "hover:text-[#B5E853] hover:border-[#B5E853]/40 hover:bg-[#B5E853]/5",
  python: "hover:text-[#387eb8] hover:border-[#387eb8]/40 hover:bg-[#387eb8]/5",
  flask: "hover:text-[#cccccc] hover:border-[#cccccc]/40 hover:bg-[#cccccc]/5",
  pandas: "hover:text-[#E70488] hover:border-[#E70488]/40 hover:bg-[#E70488]/5",
  sqlalchemy: "hover:text-[#D7191C] hover:border-[#D7191C]/40 hover:bg-[#D7191C]/5",
  openpyxl: "hover:text-[#107C41] hover:border-[#107C41]/40 hover:bg-[#107C41]/5",
  streamlit: "hover:text-[#FF4B4B] hover:border-[#FF4B4B]/40 hover:bg-[#FF4B4B]/5",
  eda: "hover:text-[#f5a623] hover:border-[#f5a623]/40 hover:bg-[#f5a623]/5",
  "data visualization": "hover:text-[#3b82f6] hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/5",
  opencv: "hover:text-[#5C3EE8] hover:border-[#5C3EE8]/40 hover:bg-[#5C3EE8]/5",
  javascript: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/40 hover:bg-[#F7DF1E]/5",
  js: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/40 hover:bg-[#F7DF1E]/5",
  jquery: "hover:text-[#0769AD] hover:border-[#0769AD]/40 hover:bg-[#0769AD]/5",
  bootstrap: "hover:text-[#7952B3] hover:border-[#7952B3]/40 hover:bg-[#7952B3]/5",
  "tailwind css": "hover:text-[#06B6D4] hover:border-[#06B6D4]/40 hover:bg-[#06B6D4]/5",
  "next.js": "hover:text-[#ffffff] hover:border-[#ffffff]/40 hover:bg-[#ffffff]/5",
  android: "hover:text-[#3DDC84] hover:border-[#3DDC84]/40 hover:bg-[#3DDC84]/5",
  tensorflow: "hover:text-[#FF6F00] hover:border-[#FF6F00]/40 hover:bg-[#FF6F00]/5",
  "google cloud": "hover:text-[#4285F4] hover:border-[#4285F4]/40 hover:bg-[#4285F4]/5",
  "machine learning": "hover:text-[#EC4899] hover:border-[#EC4899]/40 hover:bg-[#EC4899]/5",
  svm: "hover:text-[#ec4899] hover:border-[#ec4899]/40 hover:bg-[#ec4899]/5",
};

export const TechTag = memo(({ tag }) => {
  const normalizedTag = tag.toLowerCase().trim();
  const IconComponent = tagIconMap[normalizedTag] || Code;
  const colorClasses = tagColorMap[normalizedTag] || "hover:text-primary hover:border-primary/40 hover:bg-primary/5";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground transition-all duration-300 ${colorClasses}`}
    >
      <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
      <span>{tag}</span>
    </span>
  );
});

export default TechTag;
