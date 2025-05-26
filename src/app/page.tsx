import HomeGridArticle from "@/components/HomeGridArticle";
import { HomeGridArticleType } from "@/utils/types";

const article:HomeGridArticleType[] = [
  {title:"Sunny Days", image: "/poke1.jpg", style:"primary"},
  {title:"Cute Bugs", image: "/poke2.jpg", style:"secondary"},
  {title:"Pokemon1", image: "/poke1.jpg", style:"tertiary"},
  {title:"Pokemon2", image: "/poke2.jpg", style:"featured"},
  {title:"Pokemon3", image: "/poke1.jpg", style:"primary"},
  {title:"Pokemon4", image: "/poke4.jpg", style:"secondary"},
]
export default function Home() {
  return (
    <div className="home-grid">
      {article.map((item:HomeGridArticleType,index:number)=><HomeGridArticle key = {index} {...item} />)}
      
    </div>
  );
}

//spreadoperator will pass all the props