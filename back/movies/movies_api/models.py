from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Genre'
        verbose_name_plural = 'Genres'

    def __str__(self):
        return f'{self.id}, {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Movie(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')
    rate = models.CharField(max_length=300)
    length = models.CharField(max_length=300)
    cover = models.CharField(max_length=300)
    like = models.IntegerField(default=0)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Movie'
        verbose_name_plural = 'Movies'

    def __str__(self):
        return f'{self.id}, {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'rate': self.rate,
            'length': self.length,
            'cover': self.cover,
            'like': self.like,
            'genre': {
                'id': self.genre.id,
                'name': self.genre.name
            },
        }


class User(models.Model):
    first_name = models.CharField(max_length=300)
    last_name = models.CharField(max_length=300)
    username = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=300)
    img = models.TextField()

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return f'{self.id}, {self.first_name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.first_name,
            'surname': self.last_name,
            'username': self.username,
            'email': self.email,
            'password': self.password,
            'img': self.img,
        }


class Actor(models.Model):
    first_name = models.CharField(max_length=300)
    last_name = models.CharField(max_length=300)
    img = models.TextField()
    movies = models.ManyToManyField(Movie)


    class Meta:
        verbose_name = 'Actor'
        verbose_name_plural = 'Actors'

    def __str__(self):
        return f'{self.id}, {self.first_name} {self.last_name}'

    def to_json(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'img': self.img,
            'movies': self.movies.all(),
        }