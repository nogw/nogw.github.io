export interface ISettings {
  avatar: string;
  url: string;
  name: string;
  description: string;
  routes: { label: string; path: string }[];
}

export const settings: ISettings = {
  name: 'nogland',
  description: 'todo',
  url: 'https://nogw.github.io/',
  avatar: 'https://avatars.githubusercontent.com/nogw',
  routes: [
    { label: 'Articles', path: '/posts' },
    { label: 'Diary', path: '/diary' },
    { label: 'About', path: '/about' },
  ],
};

export const description = {
  short: `This place is to put some of my ideas and anotations about everything that I learn, both in articles and in simple diaries (not so diaries) ;) posts and thoughts on topics such as computers, programming, mathematics, type theory and compilers`,
};
