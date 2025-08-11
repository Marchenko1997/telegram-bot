from aiogram.types import (
    ReplyKeyboardMarkup,
    KeyboardButton,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
)

main = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="Catalog")],
        [KeyboardButton(text="Basket")],
        [KeyboardButton(text="Contacts"), KeyboardButton(text="About us")],
    ],
    resize_keyboard=True,
    input_field_placeholder="Choose an option",
)

catalog = InlineKeyboardMarkup(
    inline_keyboard=[
        [InlineKeyboardButton(text="T-shirts", callback_data="t-shirts")],
        [InlineKeyboardButton(text="Shoes", callback_data="shoes")],
        [InlineKeyboardButton(text="Hats", callback_data="hats")],
    ]
)

get_number = ReplyKeyboardMarkup(
    keyboard=[[KeyboardButton(text="Send please the number", request_contact=True)]]
,
    resize_keyboard=True
)
