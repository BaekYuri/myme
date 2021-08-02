## 담당자

<a href="https://lab.ssafy.com/minjoo0112"><img src="https://secure.gravatar.com/avatar/9bdc67a1ff49729909fada0f0f14a994?s=800&d=identicon" width="100px;" alt=""/><br /><sub><b>김민주(Frontend)</b></sub></a>

<br/>

## Frontend

스켈레톤 코드를 기반으로 웹 페이지 UI 구현 중 입니다. <br/>
다른 Frontend 담당자와 branch를 나눠 개발 중이라 branch별 코드가 상이합니다.

<br/>

## 진행사항

- ### 2주차

  - 아이디어 및 주제 기획
  - 기능 명세서 초안 작성
  - 와이어 프레임 및 목업 작업
  - react 공부

- ### 3주차

  - 화면 상세 구성(목업 작업 완료)
  - 전체적인 React Component 설계
  - 회원가입, 로그인 UI 구현 시작
  - react 공부

- ### 4주차

  - 회원가입, 로그인 UI 구현 완료
  - 미러 화면 UI 구현
  - 챌린지 관련 페이지 UI 구현 시작

<br/>

## directory

```
/public
	/images
	-Vo_icon.png
-favicon.ico
-index.html
-logo192.png
-logo512.png
-manifest.json
-index.html
```

```
/src
	/common
	- CommonHooks.jsx                -> key press, local storage state
	- InfiniteScroll.jsx             -> handle infinite scroll
	- MediaQueryHooks.jsx            -> material-ui useMediaQuery hooks

	/components
		/Auth
			/SignResponsiveDialog        -> sigin in, sigin up, recover pw
		/Challenge
			/NewChallenge        		 -> new challenge
			/RecommendChallenge			 -> recommend challenge
			/TotalChallenge				 -> total challenge
		/Create
			/CreateVoteComponent         -> create a vote
			/DialogActionsComponet       -> create a vote
			/RadioButtonsGroup           -> create a vote
		/Feed                            -> vote feed
		/Grid
			/VoteGridItem                -> vote item
			/VoteGridList                -> vote root
			/VoteGridTitle               -> vote title
		/Main
			/ButtonBases                 -> category head
			/CheckBoxButtonsGroup        -> vote options
			/HorizontalBar               -> perceantage chart
			/VoteDetailResponsiveDialog  -> vote result
		/Search
			/SearchComponent             -> search vote
		/User
			/ChangePassword              -> change pw
			/MyInfo                      -> user info
			/UserResponsiveDialog        -> user dialog root
			/VerticalTabs                -> user dialog side nav

	/context                         -> create context

	/css                             -> reset css

	/layout
		/Drawer                        -> side nav
		/Header                        -> head nav
		/Layout                        -> layout root

	/pages
	- Auth                       -> user
	- AboutMe                    -> about me
	- Challenge                  -> challenge
	- ContactUs                  -> contact us
	- CreateVote                 -> create vote
	- MainVote                   -> vote
	- MyVote                     -> my vote
	- NotFound                   -> 404 page
	- SearchVote                 -> search
	- Terms                 	 -> terms
```

```
App.js
```

```
index.js
```

```
serviceWorker.js
```

```
package.json
```

```
README.md
```

#### run

```
npm install
npm start
```
