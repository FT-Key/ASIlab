import {
  Factory,
  ChartLineUp,
  Shield,
  Globe,
  BookOpen,
  GitBranch,
  Target,
  Users,
  Lightbulb,
  Briefcase,
  FolderOpen,
  Network,
  Handshake,
  User,
  type IconProps,
} from '@phosphor-icons/react'
import type { ComponentType } from 'react'

const EMOJI_ICON_MAP: Record<string, ComponentType<IconProps>> = {
  '🏭': Factory,
  '📊': ChartLineUp,
  '🛡️': Shield,
  '🌐': Globe,
  '📚': BookOpen,
  '🔀': GitBranch,
  '🎯': Target,
  '👥': Users,
  '💡': Lightbulb,
  '💼': Briefcase,
  '📁': FolderOpen,
  '🔗': Network,
  '🤝': Handshake,
  '👤': User,
}

const FALLBACK = BookOpen

export function getTopicIcon(emoji: string): ComponentType<IconProps> {
  return EMOJI_ICON_MAP[emoji] ?? FALLBACK
}
