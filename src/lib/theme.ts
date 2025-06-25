type Theme = 'light' | 'dark' | 'system'

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  
  return (localStorage.getItem('theme') as Theme) || 'system'
}

export function setTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  localStorage.setItem('theme', theme)
} 