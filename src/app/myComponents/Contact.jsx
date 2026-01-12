import { TelemetryPlugin } from "next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin";
import { FacebookIcon } from "../components/faceBookIcon";
import { InstagramIcon } from "../components/InstagramIcon";
import { WhatsappIcon } from "../components/whatsappIcon";
import { CONTACT } from "../data";
import { XIcon } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl "> Get in touch </h2>
      <div className="text-center tracking-tighter ">
        <p className="my-4"> {CONTACT.address}</p>
        <p className="my-4">{CONTACT.phone}</p>
        <p className="my-4"> {CONTACT.email}</p>
      </div>
      <div className="flex justify-center space-x-8  ">
        <Link href="https://wa.me/93700267728">
          <WhatsappIcon className="size-6" />
        </Link>
        <Link href="https://www.facebook.com/منصور" target="_blank">
          <FacebookIcon className="size-6" />
        </Link>

        <InstagramIcon className="size-6" />

        <XIcon className="size-6" />
      </div>
    </div>
  );
}
