# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Pin.destroy_all
Pin.create [
{longitude: -76.61218930000001, latitude: 39.2903848 },
{longitude: -82.60071849999997, latitude: 39.8453418},
{longitude: -77.03687070000001, latitude: 38.9071923},
{longitude: -73.9441579, latitude: 40.6781784},
{longitude: -73.959494, latitude: 40.6528762},
{longitude: -74.00594130000002, latitude: 40.7127837},
{longitude: -122.3320708, latitude: 47.6062095}
]