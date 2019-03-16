# import pygame
import pygame

# initialize game engine
pygame.init()

window_width=900
window_height=1200

animation_increment=10
clock_tick_rate=20
size = (window_width, window_height)
screen = pygame.display.set_mode(size)


background_image = pygame.image.load("bg_one.png").convert()

while True:
    screen.blit(background_image, [0, 0])
