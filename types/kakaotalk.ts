/**
 * 카카오톡 채팅방 (2명 이상 가능)
 */
export interface KakaoChatRoom {
  /** 채팅방 고유 ID */
  roomId: string;

  /** 참여자 목록 (N명) */
  participants: KakaoUser[];

  /** 채팅 메시지 목록 */
  messages: KakaoMessage[];

  /** 방 이름 (단톡방 제목 등), 1:1이면 상대방 닉네임 표기 */
  roomName?: string;
}

/**
 * 카카오톡 유저 정보
 */
export interface KakaoUser {
  userId: string;
  nickname: string;
  profileImage?: string;
  // 필요 시 다른 필드 추가
}

/**
 * 카카오톡 메시지
 */
export interface KakaoMessage {
  id: string;
  senderId: string; // KakaoUser.userId
  text: string;
  createdAt: number; // 유닉스 타임스탬프
  messageType?: "text" | "image" | "notice" | "sticker" | "etc"; // 메시지 타입 (텍스트, 이미지, 알림, 등)
}
