import FormsComponent from "./Components/FormsComponent";
import logo from "./logomontri.png";

function PrincipalPage() {
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
        <FormsComponent />
      </div>
      <div class="lg:w-1/2 ml-4">
        <h1>charts</h1>
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
