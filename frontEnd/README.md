## Git Flow 규칙

- **main**: 운영용 브랜치
- **develop**: 개발 통합 브랜치
- `feature/기능명`

  - 기능 개발용
  - `develop`에서 분기 → 작업 후 `develop`으로 merge

- `hotfix/수정명`
  - 운영 중 긴급 수정
  - `main`에서 분기 → 수정 후 `main`과 `develop`에 merge

## Merge 흐름

```
feature/* → develop → main
              ↑
          hotfix/*
```

## ✅ 커밋 컨벤션

커밋 메시지는 아래 형식을 따릅니다:

```
<커밋_타입>(<영향_범위>): <수정사항_한줄_요약>
```

---

### ✏️ 구성 요소

```
<커밋_타입>(<영향_범위>): <수정사항_한줄_요약>
  │       │             │
  │       │             └─⫸ 수정사항 한줄 요약
  │       │
  │       └─⫸ 영향받은 서비스: transfer|my-insurance|business-ledger|...
  │
  └─⫸ 수정 종류: feat|fix|perf|refactor|test|ci|docs|build|chore
```

---

### ✅ 커밋 메시지 예시

```
feat(login): 비밀번호 UI 추가
fix(user-profile): 유저 프로필 로딩 버그 수정
docs(global): README 커밋 컨벤션 추가
```
