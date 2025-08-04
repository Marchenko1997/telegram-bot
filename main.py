from aiogram import Bot, Dispatcher
import asyncio
from dotenv import load_dotenv
import os
from aiogram.types import Message

load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")

bot = Bot(token=TOKEN)
dp = Dispatcher()


@dp.message()
async def cmd_start(message: Message):
    await message.answer("Hello")


async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    asyncio.run(main())
