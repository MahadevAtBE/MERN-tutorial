import Image from "next/image";  // Image component is use to autometicaly change the image size(data) as per the size of window to prevent slow loading

export default function Home() {
  return (
    <div>
      home
      <div>
        <Image  width={100} height={100} src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" alt="" />
        {/* width and height is mendetery */}
      </div>
    </div>
  );
}


// in next.config.mjs change the next config to alow loading images
      // images: {
      //   remotePatterns: [
      //     {
      //       protocol: 'https',
      //       hostname: "dfstudio-d420.kxcdn.com",
      //       // hostname: 'www.menucool.com',
      //       port: '',
      //     },
      //   ],