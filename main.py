from aiogram import Bot, Dispatcher, F
import asyncio
from dotenv import load_dotenv
import os
from app.handlers import router


load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")


async def main():
    bot = Bot(token=TOKEN)
    dp = Dispatcher()
    dp.include_router(router)
    await dp.start_polling(bot)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot stopped")
