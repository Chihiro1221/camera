class Drag {
  private body?: HTMLElement
  private pageX = 0
  private pageY = 0
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.body
      this.body?.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }

  private mouseDown(e: MouseEvent) {
    if (e.button !== 0) return
    const { pageX, pageY } = e
    this.pageX = pageX
    this.pageY = pageY
    const mouseMove = this.mouseMove.bind(this)
    this.body?.addEventListener('mousemove', mouseMove)
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMove)
    })

    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMove)
    })
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', this.mouseMove.bind(this))
    })
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', this.mouseMove.bind(this))
    })
  }
  private mouseMove(e) {
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY
    window.api.windowMove({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
