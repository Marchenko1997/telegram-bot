from aiogram.types import Message, CallbackQuery
from aiogram.filters import CommandStart, Command
from aiogram import F, Router
import app.keyboards as kb
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
import app.database.requests as rq

router = Router()


@router.message(CommandStart())
async def cmd_start(message: Message):
    await rq.set_user(message.from_user.id)
    await message.answer("Welcome to the snickers store", reply_markup=kb.main)


@router.message(F.text == "Catalog")
async def catalog(message: Message):
    await message.answer(
        "Choose a category of product", reply_markup=await kb.categories()
    )


@router.callback_query(F.data.startswith("category_"))
async def category(callback: CallbackQuery):
    await callback.answer("You choose a category")
    await callback.message.answer(
        "Select product by category",
        reply_markup=await kb.items(callback.data.split("_")[1]),
    )


@router.callback_query(F.data.startswith("item_"))
async def category(callback: CallbackQuery):
    item_data = await rq.get_item(callback.data.split("_")[1])
    await callback.answer("You choose a product")
    await callback.message.answer(
        f"Name: {item_data.name}\nDescription: {item_data.description}\nPrice: {item_data.price}$ ",
        reply_markup=await kb.items(callback.data.split("_")[1]),
    )
