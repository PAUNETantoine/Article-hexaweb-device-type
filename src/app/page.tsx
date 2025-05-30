import {getDeviceType} from "@/ui/utils/get-device-type";
import {FruitPicker} from "@/ui/components/fruit-picker";

export default async function Home() {
  const deviceType = await getDeviceType();


  return (
  <main className={"flex flex-col justify-center items-center text-center p-10 gap-10"}>
      <h1 className={"text-4xl font-bold underline"}>Vous êtes sur cette page web en utilisant un {deviceType === "desktop" ? "Ordinateur" : deviceType === "mobile" ? "mobile" : "Tablette"}.</h1>
      <FruitPicker deviceType={deviceType} />
  </main>
  );
}
