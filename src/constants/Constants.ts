export enum Constants {
  GATEWAY = 'wss://gateway.discord.gg/?v=6&encoding=json',
  API = 'https://discord.com/api/v6',
}

export enum OPCODE {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ELEVEN = 11,
  TWELVE = 12,
}

export enum ENDPOINTS {
  USERS = 'users',
  USER_GUILDS = 'users/@me/guilds',
  GUILDS = 'guilds',
  CHANNELS = 'channels',
  MESSAGES = 'messages',
  MEMBERS = 'members',
}

export enum ChannelType {
  DM = 'dm',
  TEXT = 'text',
  VOICE = 'voice',
  CATEGORY = 'category',
  NEWS = 'news',
  STORE = 'store',
  GROUP_DM = 'group',
  UNKNOWN = 'unknown'
}