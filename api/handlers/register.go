package handlers

import container "cristianalbu.com/api/container"

func RegisterHandlers(c *container.Container) {
	RegisterSkillsHandler(c)
}
