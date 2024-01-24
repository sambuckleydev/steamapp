export interface GameObject {
  appid: number; // Unique identifier for the game
  name: string; // Name of the game
  playtime_forever: number; // Total playtime recorded (in minutes)
  img_icon_url: string; // Icon URL for the game
  img_logo_url: string; // Logo URL for the game
}

export interface GameProps {
  game: GameObject;
}

export interface GameListProps {
  games: [GameObject];
}
