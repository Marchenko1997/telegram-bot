from aiogram.types import (
    ReplyKeyboardMarkup,
    KeyboardButton,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
)

from app.database.requests import get_categories, get_category_item
from aiogram.utils.keyboard import InlineKeyboardBuilder

main = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="Catalog")],
        [KeyboardButton(text="Basket")],
        [KeyboardButton(text="Contacts"), KeyboardButton(text="About us")],
    ],
    resize_keyboard=True,
    input_field_placeholder="Choose an option",
)


async def categories():
    all_categories = await get_categories()
    keyboard = InlineKeyboardBuilder()
    for category in all_categories:
        keyboard.add(
            InlineKeyboardButton(
                text=category.name, callback_data=f"category_{category.id}"
            )
        )
    keyboard.add(InlineKeyboardButton(text ="Back to main menu", callback_data="main_menu"))
    return keyboard.adjust(2).as_markup()


async def items(category_id):
    all_items = await get_category_item(category_id)
    keyboard = InlineKeyboardBuilder()
    for item in all_items:
        keyboard.add(
            InlineKeyboardButton(
                text=item.name, callback_data=f"item_{item.id}"
            )
        )
    keyboard.add(
        InlineKeyboardButton(text="Back to main menu", callback_data="main_menu")
    )
    return keyboard.adjust(2).as_markup()
