// export type preloadStatetype = {
//   title: string;
//   level: number;
//   Todos: {
//     name: string;
//     priority: number;
//   }[];
// }[];

export type preloadStatetype =
  | {
      title: string;
      level: number;
      id:number;
      Todos: {
        title: string;
        priority: number;
      }[];
    }[]
  | undefined;

export enum ActionType {
  ADD_TODO = "Add_Todo",
  ADD_TITLE = "Add_Title",
}
