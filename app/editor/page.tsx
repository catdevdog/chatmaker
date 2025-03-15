import { Separator } from "@/components/ui/separator";
import KakaoTalk from "@/components/platforms/kakaotalk";

export default function Editor() {
  return (
    <div className="flex absolute w-auto h-full border border-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-[30rem]">
      <div>
        <h2>Controller</h2>
        <div>Controller content</div>
      </div>
      <Separator
        orientation="vertical"
        decorative
        className="w-2 bg-gray-500"
      />
      <div>
        <h2>Preview</h2>
        <div>
          <KakaoTalk />
        </div>
      </div>
    </div>
  );
}
