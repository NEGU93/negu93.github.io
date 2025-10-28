import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-llm',
  templateUrl: './chat-llm.component.html',
  styleUrls: ['./chat-llm.component.css']
})
export class ChatLlmComponent implements OnInit {
  // Your Hugging Face Space URL
  huggingFaceSpaceUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {
    this.huggingFaceSpaceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://negu93-rag-negu-expert.hf.space'
    );
  }

  ngOnInit(): void {
    // Component initialized
  }
}