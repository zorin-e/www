import { List, DateTimeIsoString } from "@shared/types";

type Title = string;
type Description = string;

export enum PostTag {
  Advice = "Совет",
  Ai = "Искусственный интеллект",
  A11y = "Доступность",

  Behavior = "Поведение",
  Biology = "Биология",
  Books = "Книги",
  Brain = "Мозг",
  Butthurt = "Бомбит",

  Cap = "Капитан очевидность",
  Communication = "Общение",

  Dev = "Разработка",
  Design = "Дизайн",

  Economics = "Экономика",
  Editorial = "Выбор редакции",
  Emotions = "Эмоции",

  History = "История",

  Learning = "Обучение",
  Links = "Ссылки",

  Math = "Математика",
  Management = "Управление",
  Music = "Музыка",

  Opinion = "Ящитаю",

  Philosophy = "Философия",
  Physics = "Физика",
  Process = "Как это было",
  Product = "Продукт",
  Productivity = "Продуктивность",
  Psychology = "Психология",

  Reading = "Чтение",
  Reflection = "Рефлексия",
  Running = "Пробежки",

  Space = "Космос",
  Story = "Офигительная история",
  Summary = "Конспект",

  Text = "Редактура",
  Tools = "Инструменты",
  Travel = "Мир",

  Urban = "Урбанистика",
}

export type PostTags = keyof PostTag;
export type PostMetadata = {
  title: Title;
  description: Description;
  datetime: DateTimeIsoString;
  tags: List<PostTags>;
};