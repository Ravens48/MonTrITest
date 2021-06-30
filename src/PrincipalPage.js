import FormsComponent from "./Components/FormsComponent";
import ChartsComponent from "./Components/ChartsComponent"
import logo from "./logomontri.png";
import { react, useState } from "react";


function PrincipalPage() {
    const [datas, setDatas] = useState({})
    const getData = (childData) => {
        setDatas(childData)
  };
  return (
    <div class="lg:flex">
      <div class="lg:w-1/2 md:ml-36 ml-4">
        <div class="my-8">
          <img class="object-contain h-32 w-32" src={logo} alt="montri" />
          <div class="md w-68">
            <h1 class="text-5xl font-bold">
              Bienvenue sur votre espace Client
            </h1>
          </div>
        </div>
        <FormsComponent getData={getData}/>
      </div>
      <div class="lg:w-1/2 ml-4">
          {datas && datas.v1 &&
          <ChartsComponent takedata={datas}/>
          }
      </div>
    </div>
  );
}

export default PrincipalPage;

{
  /* <div class="flex ...">
  <div class="w-1/2 ... ">w-1/2</div>
  <div class="w-1/2 ... ">w-1/2</div>
</div> */
}
