import Image from "next/image";

export default function Logo(){

    return(
        <i>
            <Image
                alt="ViveMedellín logo"
                src="/logo.png"
                width={163}
                height={81}
                className="w-[100px] shadow-lg bg-white object-center object-fill pr-2"
            />
        </i>
    )
}