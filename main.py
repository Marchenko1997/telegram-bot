from aiogram import Bot, Dispatcher, F
import asyncio
from dotenv import load_dotenv
import os
from aiogram.types import Message
from aiogram.filters import CommandStart, Command

load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")

bot = Bot(token=TOKEN)
dp = Dispatcher()


@dp.message(CommandStart())
async def cmd_start(message: Message):
    await message.answer("Hello")
    await message.reply("How are you?")

@dp.message(Command("help"))
async def cmd_help(message: Message):
    await message.answer("Help")


async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot stopped")
    asyncio.run(main())
