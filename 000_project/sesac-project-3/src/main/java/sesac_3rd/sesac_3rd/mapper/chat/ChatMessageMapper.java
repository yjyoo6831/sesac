package sesac_3rd.sesac_3rd.mapper.chat;

import org.springframework.stereotype.Component;
import sesac_3rd.sesac_3rd.dto.chat.ChatMessageDTO;
import sesac_3rd.sesac_3rd.dto.chat.ChatRoomDTO;
import sesac_3rd.sesac_3rd.entity.ChatMessage;
import sesac_3rd.sesac_3rd.entity.ChatRoom;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ChatMessageMapper {

    // 가장 최근 메시지 내용
    public static ChatRoomDTO.LastMessageInfo getLastMessageInfo(ChatRoom chatRoom) {
        return chatRoom.getChatMessages().stream()
                .max(Comparator.comparing(ChatMessage::getCreatedAt))
                .map(chatMessage -> new ChatRoomDTO.LastMessageInfo(
                        chatMessage.getChatmsgContent(),
                        chatMessage.getCreatedAt()))
                .orElse(new ChatRoomDTO.LastMessageInfo("아직 작성한 메세지가 없어요.", null)); // 기본값 반환
    }



    // 채팅방 메세지 단일 조회
    public static ChatMessageDTO.ChatMessage ChatMessageToChatMessageResponseDTO(ChatMessage chatMessage) {
        return ChatMessageDTO.ChatMessage.builder()
                .chatmsgId(chatMessage.getChatmsgId())
                .chatroomId(chatMessage.getChatRoom().getChatroomId())
                .senderId(chatMessage.getSender().getUserId())
                .senderProfileImg(chatMessage.getSender().getProfileImg())
                .chatmsgContent(chatMessage.getChatmsgContent())
                .createdAt(chatMessage.getCreatedAt())
                .build();
    }



    // 채팅방 메세지 목록 조회
    public static ChatMessageDTO.ChatMessageList ChatMessageListToChatMessageListResponseDTO(Long chatroomId, List<ChatMessage> chatMessages, int page, int pageSize, int totalPages) {
        List<ChatMessageDTO.ChatMessage> chatmsgList = chatMessages.stream()
                .map(ChatMessageMapper::ChatMessageToChatMessageResponseDTO)
                .collect(Collectors.toList());

        return ChatMessageDTO.ChatMessageList.builder()
                .chatroomId(chatroomId)
                .chatmsgList(chatmsgList)
                .page(page)
                .pageSize(pageSize)
                .totalPages(totalPages)
                .build();
    }
}
