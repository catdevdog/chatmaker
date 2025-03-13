/**
 * 인스타 게시글(피드)
 */
export interface InstaPost {
  id: string;
  username: string;
  profileImage: string;
  mediaUrl: string; // 사진 or 동영상
  caption?: string; // 게시글 내용 (옵션)
  likes: number; // 좋아요 수
  createdAt: number; // 유닉스 타임스탬프
}

/**
 * 1:1 DM 데이터
 */
export interface InstaDM {
  id: string; // DM 고유 ID (예: "userA-userB")
  users: [string, string]; // 참여자 2명의 username (가령 "alex", "bob")
  messages: InstaDMMessage[]; // 대화 내용
}

/**
 * 인스타 DM 메시지
 */
export interface InstaDMMessage {
  id: string;
  sender: string; // username
  text: string;
  createdAt: number; // 타임스탬프
}
