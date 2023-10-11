// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onCLickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="button" onClick={onCLickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
