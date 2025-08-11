from aiogram.types import Message, CallbackQuery
from aiogram.filters import CommandStart, Command
from aiogram import F, Router
import app.keyboards as kb
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext

router = Router()


class Register(StatesGroup):
    name = State()
    age = State()
    number = State()

@router.message(CommandStart())
async def cmd_start(message: Message):
    await message.answer("Hello", reply_markup=kb.main)
    await message.reply("How are you?")


@router.message(Command("help"))
async def cmd_help(message: Message):
    await message.answer("You press help button")


@router.message(F.text == "Catalog")
async def cmd_catalog(message: Message):
    await message.answer("Choose category", reply_markup=kb.catalog)

@router.callback_query(F.data == "t-shirts")
async def t_shirt(callback: CallbackQuery):
    await callback.answer("You hoose category", show_alert=True)
    await callback.message.answer("You choose t-shirts category")

@router.message(Command("register"))
async def cmd_register(message: Message, state: FSMContext):
    await state.set_state(Register.name)
    await message.answer("Enter your name")

@router.message(Register.name)
async def register_name(message: Message, state: FSMContext):
    await state.update_data(name = message.text)
    await state.set_state(Register.age)
    await message.answer("Enter your age")

@router.message(Register.age)
async def register_age(message: Message, state: FSMContext):
    await state.update_data(age=message.text)
    await state.set_state(Register.number)
    await message.answer("Send your telephone number", reply_markup=kb.get_number)

@router.message(Register.number, F.contact)
async def register_number(message: Message, state: FSMContext):
    await state.update_data(number=message.contact.phone_number)
    data = await state.get_data()
    await message.answer(f"Your name: {data['name']}\nYour age: {data['age']}\nYour number: {data['number']}")
    await state.clear()