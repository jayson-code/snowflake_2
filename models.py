import os
from flask_wtf import FlaskForm
from wtforms import HiddenField
from wtforms.validators import DataRequired, Regexp

DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgres://vagrant:vagrant@localhost/audiosnowflake"
)

class AddSnowflakeForm(FlaskForm):
    song_id = HiddenField(
        'song_id',
        validators=[DataRequired(), Regexp("[A-Z0-9]*")]
    )
    audio_file = HiddenField(
        'audio_file',
        validators=[DataRequired()]
    )
    artist_name = HiddenField(
        'artist_name',
        validators=[DataRequired()]
    )
    title = HiddenField(
        'title',
        validators=[DataRequired()]
    )
