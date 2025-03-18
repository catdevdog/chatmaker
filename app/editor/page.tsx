"use client";

import Instagram from "@/components/platforms/instagram";
import KakaoTalk from "@/components/platforms/kakaotalk";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Editor() {
  const [platform, setPlatform] = useState("kakaotalk");

  return (
    <div className="flex absolute w-auto h-full border border-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-[20rem]">
      <div>
        <h2>Controller</h2>
        <div>
          <RadioGroup
            name="platform"
            value={platform}
            onValueChange={setPlatform}
          >
            <div className="flex items-center space-x-2 text-lg">
              <RadioGroupItem value="instagram" id="instagram" />
              <Label htmlFor="instagram">Instagram</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kakaotalk" id="kakaotalk" />
              <Label htmlFor="kakaotalk">KakaoTalk</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <Separator
        orientation="vertical"
        decorative
        className="w-2 bg-gray-500"
      />
      <div>
        <h2>Preview</h2>
        <div>
          {platform === "kakaotalk" ? (
            <KakaoTalk>
              <KakaoTalk.Header />
              <KakaoTalk.Body>
                <KakaoTalk.Notice />
                <KakaoTalk.Content />
                <KakaoTalk.Content />
              </KakaoTalk.Body>
            </KakaoTalk>
          ) : (
            <Instagram />
          )}
        </div>
      </div>
    </div>
  );
}
