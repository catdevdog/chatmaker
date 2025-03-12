# README

## 소개

**chatmaker**는 인스타그램, 카카오톡 등 SNS 스타일의 화면을 손쉽게 구성해 숏폼 콘텐츠(대화형 톡툰, 게시글 등)를 빠르게 제작할 수 있도록 도와주는 웹 서비스입니다. 사용자는 에디터에서 텍스트, 이미지, 이모지 등을 삽입해 SNS 화면을 만든 뒤, 실시간 미리보기로 결과물을 확인하고, 사진 또는 영상으로 캡처하여 공유할 수 있습니다.

## 주요 기능

1. **SNS 스타일 템플릿 선택**  
   - 인스타그램, 카카오톡 등 다양한 UI 중 선택 가능  
   - 텍스트, 이미지, 이모지 등 원하는 요소를 자유롭게 배치
2. **순차적 대화 진행**  
   - 클릭 시 다음 대화가 이어지는 톡툰/채팅형 스토리 구성  
   - 자연스러운 스토리텔링으로 숏폼 영상 제작에 최적화
3. **실시간 미리보기**  
   - 모바일 기기 비율에 맞춘 디자인으로 최종 결과물 확인  
   - 별도 장치 없이 화면 캡처 가이드 제공 (사진/동영상)
4. **데이터 관리 및 통계**  
   - 생성된 콘텐츠 수, 사진/영상 캡처 유형 등 통계

## 기술 스택

- **프론트엔드**: Next.js (React) + TypeScript  
- **UI**: Tailwind CSS + shadcn/ui  
- **백엔드/DB**: Firebase

## 프로젝트 구조 (예시)

```bash
my-gramtalk-project
├── pages/       # Next.js 페이지 라우팅
├── components/  # 재사용 가능한 React 컴포넌트
├── lib/         # 유틸 함수, API 호출 로직 등
├── public/      # 정적 파일 (이미지, 폰트 등)
├── styles/      # 전역 스타일, Tailwind config
└── README.md    # 프로젝트 소개 및 문서화
```

## 설치 및 실행

1. 리포지토리 클론:

```bash
git clone https://github.com/your-username/gramtalk.git
cd gramtalk
```

2. 패키지 설치:

```bash
yarn install
# 또는
npm install
```

3. 개발 서버 실행:

```bash
yarn dev
# 또는
npm run dev
```

- 브라우저에서 `http://localhost:3000` 접속

## Firebase 연동 (예시)
1. Firebase 콘솔에서 새 프로젝트 생성 후, 웹 앱 추가
2. 프로젝트 루트에 `.env.local` 파일 생성, 다음 정보를 기입:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
# ... 필요 정보 추가
```

3. Firebase SDK 설치 후 초기화:

```bash
yarn add firebase
# 또는
npm install firebase
```

> **주의**: `.env.local`은 Git에 올리지 않도록 `.gitignore`에 추가되어야 합니다.

## 사용 방법
1. **에디터 페이지**에서 SNS 템플릿 선택 → 텍스트/이미지 추가
2. **미리보기**로 실시간 결과 확인
3. **캡처 유형**(사진/동영상) 선택 후, 결과물 캡처 혹은 녹화

## 기여 가이드
1. **Fork** 후 Pull Request 생성
2. Issue나 Discussions를 통해 버그 제보, 기능 제안 환영
3. 커밋 메시지는 **의미를 명확히** 적어주기 (예: fix, feat, refactor 등)

## 라이선스
프로젝트는 [MIT License](https://opensource.org/licenses/MIT) 하에 배포됩니다. 자유롭게 포크하여 활용하되, 라이선스 전문과 저작권 고지를 포함해 주세요.

## 향후 확장 계획
- 더 다양한 SNS 템플릿 추가(트위터, 페이스북 등)
- AI를 활용한 대화내용 자동 생성
- 영상 편집 및 배경음악 추가 기능 등 고도화

---

본 서비스는 간단한 아이디어를 빠르게 **숏폼 콘텐츠**로 구현할 수 있도록 돕는 **프로젝트**입니다. 궁금한 사항이나 피드백은 언제든지 이슈로 남겨주세요.

