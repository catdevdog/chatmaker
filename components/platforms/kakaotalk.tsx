function TalkHeader() {
  return (
    <div className="flex justify-between items-center">
      <span>뒤로가기 버튼</span>
      <span>채팅방 이름</span>
      <span>4</span>
      <span>검색 버튼</span>
      <span>햄버거 메뉴</span>
    </div>
  );
}

function TalkNotice() {
  return (
    <div>
      <span>공지사항</span>
    </div>
  );
}

function TalkContent() {
  return (
    <div>
      <div>
        <span>프로필 사진</span>
        <span>이름</span>
        <span>시간</span>
      </div>
      <div>
        <span>메시지 내용</span>
      </div>
    </div>
  );
}

function TalkBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function KakaoTalk({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

KakaoTalk.Header = TalkHeader;
KakaoTalk.Notice = TalkNotice;
KakaoTalk.Content = TalkContent;
KakaoTalk.Body = TalkBody;

export default KakaoTalk;
